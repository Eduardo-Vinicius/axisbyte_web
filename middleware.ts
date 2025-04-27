import { type NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n/config";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get('authToken');

  // Verifica se o usuário está tentando acessar o dashboard
  if (pathname.startsWith('/dashboard')) {
    if (!authToken) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Se tentar acessar /login já estando autenticado, redireciona para o dashboard
  if (pathname === '/login' && authToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Internacionalização: Verifica se o pathname já contém locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Se não tiver locale, redireciona adicionando o locale padrão
  const locale = i18n.defaultLocale;
  return NextResponse.redirect(
    new URL(`/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`, request.url)
  );
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)', // Middleware roda para tudo, exceto APIs e estáticos
  ],
};
