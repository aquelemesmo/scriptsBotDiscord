# Command ban
# Exemplo: !ban @member
# Linguagem usada: python 3.10
# Author: Sl4ker#1985

# Banimento de um membro, sem especificar o motivo

from typing import Optional

import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='!')


@bot.command()
@commands.guild_only()
@commands.has_guild_permissions(ban_members=True)
@commands.bot_has_guild_permissions(ban_members=True)
async def ban(ctx: commands.Context[commands.Bot],
              member: discord.Member) -> Optional[discord.Message]:
    # para o comando ficar completo, você precisa implementar o evento
    # on_command_error para tratar os erros. Veja mais sobre ele:
    # https://gist.github.com/EvieePy/7822af90858ef65012ea500bcecf1612

    if ctx.guild is None or isinstance(ctx.author, discord.User):
        return

    mention = ctx.author.mention

    if ctx.guild.owner == member:
        # se a pessoa tentar banir o dono do servidor:
        return await ctx.send(
            f'{mention} você não pode banir o dono do servidor!')
    elif member == ctx.author:
        # se a pessoa tentar se banir
        return await ctx.send(f'{mention} você não pode se banir!')
    elif member == ctx.guild.me:
        # se a pessoa tentar banir o bot
        return await ctx.send(f'{mention} eu não posso me banir!')
    elif ctx.author.top_role <= member.top_role:
        # se a pessoa tentar banir alguém com o cargo mais alto que ela
        return await ctx.send(
            f'{mention} você só pode banir pessoas que tenham cargo mais baixo que o seu!'
        )
    try:
        # vai tentar banir o usuário
        await ctx.guild.ban(member)
    except discord.errors.Forbidden:
        # esse erro, é quando o bot não tem permissão para banir o membro
        return await ctx.send(
            f'{mention} eu não tenho permissão para banir este usuário!')
    except discord.HTTPException as e:
        # se aconteceu algum outro erro
        return await ctx.send(
            f'{mention} ocorreu o erro ```{e}```ao tentar banir o usuário, tente novamente.'
        )
    # se não passou pelos except's
    else:
        return await ctx.send(f'{mention} usuário banido!')


bot.run('token')
