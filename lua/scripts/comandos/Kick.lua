--Kick command
--Exemplo: !kick <@member> <motivo>
--Linguagem usada: lua
--Author: aquelemesmoojack

function Kick:__init(data, parent)
    __init(self,data,parent)
    self.__init = self.client.__users:__insert(data.user)
end

function Kick:__hash()
    return self.__user.__id
end

function get.guild(self)
    return self.__parent
end

function get.user(self)
    return self.__user
end

return Kick