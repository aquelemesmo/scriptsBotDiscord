# Command ping
# Exemplo: !ping
# Linguagem usada: python
# Author: aquelemesmoojack

@bot.command()
async def ping(ctx):
    await ctx.send('Pong! {0}'.format(round(bot.latency, 1)))