import discord
from discord.ext import commands
from discord import app_commands


intents = discord.Intents.all()
bot = commands.Bot(command_prefix='!', intents=intents)

def has_permission_to_send(channel: discord.TextChannel) -> bool:
    return channel.permissions_for(channel.guild.me).send_messages

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

@bot.tree.command(name="anunciar", description="Envia um anúncio para um canal específico ou atual")
@app_commands.describe(titulo="Título do anúncio", descricao="Descrição do anúncio", canal="Canal para envio (opcional)")
async def anunciar(interaction: discord.Interaction, titulo: str, descricao: str, canal: discord.TextChannel = None):
    try:
        if canal is None:
            canal = interaction.channel
        
        if not has_permission_to_send(canal):
            await interaction.response.send_message('Não tenho permissão para enviar mensagens neste canal.', ephemeral=True)
            return

        embed = discord.Embed(
            title=titulo,
            description=descricao,
            color=discord.Color.blue()
        )
        embed.set_footer(text=f'Anúncio enviado por: {interaction.user}')

        await canal.send(embed=embed)
        await interaction.response.send_message('Anúncio enviado com sucesso!', ephemeral=True)

    except discord.Forbidden:
        await interaction.response.send_message('Não tenho permissão para enviar mensagens ou embeds neste canal.', ephemeral=True)

    except discord.HTTPException:
        await interaction.response.send_message('Erro ao tentar enviar o anúncio. Tente novamente.', ephemeral=True)

    except Exception as e:
        await interaction.response.send_message('Ocorreu um erro inesperado ao tentar enviar o anúncio.', ephemeral=True)
        print(f'Erro inesperado: {e}')


bot.run('TOKEN')
