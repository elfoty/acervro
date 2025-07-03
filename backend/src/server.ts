import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import jwt from '@fastify/jwt';
import { authRoutes } from
    './route/auth.route';
import livroRoutes from './route/livro.route';
import categoriaRoutes from './route/categoria.route';  
import { verifyJWT } from './middleware/auth.middleware';
import autorRoutes from './route/autor.route';

const app = Fastify();
app.register(jwt, {
    secret: process.env.JWT_SECRET || 'secret'
});
app.register(swagger, {
    mode: 'dynamic',
    swagger: {
        info: {
            title: 'API com Prisma - Acervro',
            version: '1.0.0'
        }
    }
})
app.register(swaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'list', deepLinking: true
    }
});

app.register(authRoutes);
app.register(async (scope) => { scope.addHook('onRequest', verifyJWT); await scope.register(livroRoutes); });
app.register(async (scope) => { scope.addHook('onRequest', verifyJWT); await scope.register(categoriaRoutes); });
app.register(async (scope) => { scope.addHook('onRequest', verifyJWT); await scope.register(autorRoutes); });
app.listen({ port: 3000 });
console.log('API rodando em http://localhost:3000');
console.log('Docs emhttp://localhost:3000/docs');