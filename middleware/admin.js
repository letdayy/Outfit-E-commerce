//lógica para validação de administrador
function isAdmin(req, res, next) {
    if (req.user.isAdmin) {
      next(); // Permite que a solicitação continue para o próximo middleware na cadeia
    } else {
      res.status(403).send("Acesso negado!"); // Responde com um status 403 se o usuário não for um administrador
    }
  }

module.exports = {isAdmin};