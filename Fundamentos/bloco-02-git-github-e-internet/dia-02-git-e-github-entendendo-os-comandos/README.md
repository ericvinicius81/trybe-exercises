### Git & GitHub - Entendendo os comandos

Na última aula você aprendeu que o Git e o GitHub podem te ajudar muito a trabalhar de maneira colaborativa e distribuída.\
Hoje você aprenderá algumas técnicas para maximizar a eficiência desse trabalho em grupo, garantindo uma boa qualidade do software que você escreve

Você será capaz de:

Copiar um repositório já existente no GitHub para o seu computador;\
Abrir Pull Requests ;\
Trabalhar em um mesmo projeto, com mais de uma pessoa, de forma assíncrona e distribuída.

#### Exercícios

Para fazer os exercícios a seguir, você deve utilizar o projeto com o texto no arquivo .txt , localizado dentro do diretório do dia anterior, crie uma cópia para usar no dia de hoje.

Navegue até a raiz do projeto com o arquivo .txt;
Verifique se não existe nada sem "commitar" utilizando git status:\
Caso exista algo, verifique se é necessário e faça o commit , ou remova-o.\
Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela;\
No arquivo .txt , ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:\
Faça um git add nome-do-arquivo.extensao;\
Agora um git commit -m "Mensagem que você gostaria";\
E por último um git push -u origin trybe-skills-changes;\
Abra um Pull Request com uma descrição detalhada:
Retorne para a branch principal, master , com o comando: git checkout master;\
Verifique que você está na branch master, com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);\
Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;\
No mesmo arquivo .txt que você modificou no passo 4 , também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos;\
Faça um git add nome-do-arquivo.extensao;\
Agora um git commit -m "Mensagem que você gostaria";\
E por último um git push -u origin trybe-skills-updates;\
Após o primeiro "push" da sua branch, você pode usar apenas o comando git push;\
Abra um Pull Request com uma descrição amigável:\
Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master, através do Pull Request:\
Primeiro, vá até a página do primeiro Pull Request (branch trybe-skills-changes) e faça o merge clicando no botão verde "Merge pull request";\
Agora, vá até página do outro Pull Request (branch trybe-skills-updates) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta;\
Você terá que resolver esse conflito antes de "mergear" o Pull Request. Clique no botão "Resolve conflicts", escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>>, elas são criadas apenas para dar uma identificação mais visual ao problema). Depois clique em "Mark as resolved" e, em seguida, em "Commit merge;\
Agora você deve conseguir "mergear" seu Pull Request normalmente.
