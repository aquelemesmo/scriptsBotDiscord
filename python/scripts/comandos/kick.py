# Command kick
# Exemplo: !kick @member
# Linguagem usada: python 3.10
# Author: aquelemesmoojack#4306

# Banimento de um membro, sem especificar o motivo

from typing import Optional

import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='!')


@bot.command()
@commands.guild_only()
@commands.has_guild_permissions(kick_members=True)
@commands.bot_has_guild_permissions(kick_members=True)
async def ban(ctx: commands.Context[commands.Bot],
              member: discord.Member) -> Optional[discord.Message]:
    # para o comando ficar completo, você precisa implementar o evento
    # on_command_error para tratar os erros. Veja mais sobre ele:
    # https://gist.github.com/EvieePy/7822af90858ef65012ea500bcecf1612

    if ctx.guild is None or isinstance(ctx.author, discord.User):
        return

    mention = ctx.author.mention

    if ctx.guild.owner == member:
        # se a pessoa tentar expulsar o dono do servidor:
        return await ctx.send(
            f'{mention} você não pode expulsar o dono do servidor!')
    elif member == ctx.author:
        # se a pessoa tentar se expulsar
        return await ctx.send(f'{mention} você não pode se expulsar!')
    elif member == ctx.guild.me:
        # se a pessoa tentar expulsar o bot
        return await ctx.send(f'{mention} eu não posso me banir!')
    elif ctx.author.top_role <= member.top_role:
        # se a pessoa tentar expulsar alguém com o cargo mais alto que ela
        return await ctx.send(
            f'{mention} você só pode expulsar pessoas que tenham cargo mais baixo que o seu!'
        )
    try:
        # vai tentar expulsar o usuário
        await ctx.guild.kick(member)
    except discord.errors.Forbidden:
        # esse erro, é quando o bot não tem permissão para expulsar o membro
        return await ctx.send(
            f'{mention} eu não tenho permissão para expulsar este usuário!')
    except discord.HTTPException as e:
        # se aconteceu algum outro erro
        return await ctx.send(
            f'{mention} ocorreu o erro ```{e}```ao tentar banir o usuário, tente novamente.'
        )
    # se não passou pelos except's
    else:
        return await ctx.send(f'{mention} usuário expulso!')


bot.run('token')
