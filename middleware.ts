import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const authToken = request.cookies.get('authToken');
  
  // Verifica se o usuário está autenticado
  if (pathname.startsWith('/dashboard')) {
    if (!authToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Redireciona para o dashboard se o usuário estiver autenticado e tentar acessar a página de login
  if (pathname === '/login' && authToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
