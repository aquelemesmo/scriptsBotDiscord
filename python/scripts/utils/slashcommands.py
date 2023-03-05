# Slashcommands em py
# Linguagem usada: python
# Author: aquelemesmoojack

import discord
from discord import app_commands

intents = discord.Intents.default()
bot = discord.Client(intents=intents)
tree = app_commands.CommandTree(client)

@tree.command(name = "nome_do_comando", description = "descrição_do_comando")
async def comando(interaction):
    await interaction.response.send_message("Olá mundo!")

@bot.event
async def on_ready():
    await tree.sync(guild=discord.Object(id=ID DO SEU SERVIDOR))
    print("Pronto!")

client.run("token")