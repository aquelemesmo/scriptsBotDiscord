--Ban command
--Exemplo: !ban <@member> <motivo>
--Linguagem usada: lua
--Author: aquelemesmoojack

function Ban:__init(data, parent)
    __init(self,data,parent)
    self.__init = self.client.__users:__insert(data.user)
end

function Ban:__hash()
    return self.__user.__id
end

function Ban:delete()
    return self.__parent:unbanUser(self.__user)
end

function get.guild(self)
    return self.__parent
end

function get.user(self)
    return self.__user
end

return Ban