import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Javascript news',
  subtitle: 'What is new about JS in 2022?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [
    'IT',
  ],
  blocks: [
    {
      id: '3',
      type: 'CODE',
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = "
        + "jsonServer.router(path.resolve(__dirname, 'db.json'));\n\n"
        + 'server.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
    },
    {
      id: '7',
      type: 'TEXT',
      title: 'The title of the block',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем '
        + 'случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не '
        + 'написали ни строчки кода на JS и читаете этот текст в браузере, на настольном '
        + 'компьютере, это значит, что вы буквально в считанных секундах от своей первой '
        + 'JavaScript-программы.',
      ],
    },
    {
      id: '8',
      type: 'IMAGE',
      src: ''
        + 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a0'
        + '2/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '9',
      type: 'TEXT',
      title: 'The title of the block',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах.'
        + ' В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих по'
        + 'р вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном ком'
        + 'пьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-про'
        + 'граммы.',
      ],
    },
  ],
  userId: '1',
};

export const createArticle = (article?: Article) => cy.request({
  method: 'POST',
  url: 'http://localhost:8000/articles',
  headers: { Authorization: 'asasf' },
  body: article ?? defaultArticle,
}).then((resp) => resp.body);

export const removeArticle = (articleId: string) => cy.request({
  method: 'DELETE',
  url: `http://localhost:8000/articles/${articleId}`,
  headers: { Authorization: 'asasf' },
});

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
