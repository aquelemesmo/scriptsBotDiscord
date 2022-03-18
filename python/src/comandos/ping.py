# Command ping
# Exemplo: !ping
# Linguagem usada: python 3.10
# Author: Sl4ker#1985

# Obter o tempo de resposta do bot

import discord
from discord.ext import commands
from stopwatch import Stopwatch  # pip install python-stopwatch2

bot = commands.Bot(command_prefix='!')


@bot.command()
async def ping(ctx: commands.Context[commands.Bot]) -> discord.Message:
    # calculando o tempo que demora para enviar 1 mensagem
    with Stopwatch() as cronometro:
        msg = await ctx.send('Calculando ping...')

    texto = f'🏓 Gateway Ping: {int(bot.latency * 1000)}ms\n'
    texto += f'📨 API Ping: {cronometro}'

    return await msg.edit(content=texto)


bot.run('token')
