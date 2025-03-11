# Command desban
# Exemplo: /desban <usuário> <motivo>
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
    elif isinstance(error, commands.MissingPermissions):
        await ctx.send('Você não tem permissão para desbanir membros.')
    elif isinstance(error, commands.BadArgument):
        await ctx.send('Use um ID válido para desbanir um usuário.')
    else:
        await ctx.send(f'Ocorreu um erro: {error}')

@bot.tree.command(name='desban', description='Desbanir um usuário')
@app_commands.describe(usuario='Usuário que será desbanido', motivo='Motivo do desbanimento')
@commands.has_permissions(ban_members=True)
async def desban(interaction: discord.Interaction, usuario: int, motivo: str):
    guild = interaction.guild
    try:
        bans = await guild.bans()
        banned_entry = discord.utils.find(lambda entry: entry.user.id == usuario, bans)
        if banned_entry:
            await guild.unban(banned_entry.user, reason=motivo)
            await interaction.response.send_message(f'{banned_entry.user.name} foi desbanido com sucesso!')
        else:
            await interaction.response.send_message('Usuário não encontrado na lista de banidos.')
    except discord.Forbidden:
        await interaction.response.send_message('Não tenho permissão para desbanir esse usuário.')
    except discord.HTTPException:
        await interaction.response.send_message('Ocorreu um erro ao tentar desbanir o usuário.')
    except Exception as error:
        await interaction.response.send_message(f'Ocorreu um erro: {error}')

bot.run('TOKEN')
