import { HttpInterceptorFn } from '@angular/common/http';

export const headerHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
