# Command uptime
# Exemplo: !uptime
# Linguagem usada: python 3.10
# Author: Sl4ker#1985

# Obtém o tempo que o bot está online
# ATENÇÃO: Comando feito com o discord.py v2

import discord
from discord.utils import format_dt, utcnow
from discord.ext import commands

bot = commands.Bot(command_prefix='!')

@bot.event
async def on_ready():
    print('Bot online')
    if not hasattr(bot, 'started_at'):
        setattr(bot, 'started_at', utcnow())

@bot.command()
async def uptime(ctx: commands.Context[commands.Bot]) -> discord.Message:
    return await ctx.send(f'Estou online {format_dt(self.started_at, "R")}')

bot.run('token')
