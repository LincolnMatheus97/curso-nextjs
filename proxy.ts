import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // Define em quais rotas o middleware vai rodar (ignora arquivos estáticos e imagens)
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};