import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

/**
 * Unpacks the content from the error response.
 */
export const httpError = () =>
  catchError(error => {
    const errorResponse = error.response.data
      ? {
          ...error.response.data,
          status: error.response.status,
        }
      : error.response;
    return throwError(errorResponse);
  });
