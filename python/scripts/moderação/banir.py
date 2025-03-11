# Command ban
# Exemplo: /ban <usuário> <motivo>
# Linguagem usada: py
# Author: Luis Gomes

import discord
from discord.ext import commands
from discord import app_commands

intents = discord.Intents.all()
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f'Bot conectado como {bot.user}')
    try:
        synced = await bot.tree.sync()
        print(f'Slash commands sincronizados: {len(synced)} comandos')
    except Exception as e:
        print(f'Erro ao sincronizar slash commands: {e}')

@bot.event
async def on_command_error(ctx, error):
    if isinstance(error, commands.CommandNotFound):
        await ctx.send('Comando não encontrado.')
    else:
        await ctx.send(f'Ocorreu um erro: {error}')

@bot.tree.command(name='banir', description='Banir um usuário')
@commands.has_permissions(ban_members=True)
@app_commands.describe(usuario='Usuário que será banido', motivo='Motivo do banimento')
async def ban(interaction: discord.Interaction, usuario: discord.Member, motivo: str):
    if interaction.user.top_role <= usuario.top_role:
        await interaction.response.send_message('Não podes banir alguém com um cargo maior ou igual ao teu.')
        return

    try:
        await usuario.ban(reason=motivo)
        await interaction.response.send_message(f'{usuario.mention} foi banido. Motivo: {motivo}')
    except discord.Forbidden:
        await interaction.response.send_message('Não tenho permissão para banir esse usuário.')
    except discord.HTTPException:
        await interaction.response.send_message('Ocorreu um erro ao tentar banir o usuário.')
    except Exception as error:
        await interaction.response.send_message(f'Erro ao tentar banir: {error}')

bot.run('TOKEN')
