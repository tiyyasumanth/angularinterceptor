import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Authheader } from './Authheaderinterceptor';



export const httpunionproviders=[{provide:HTTP_INTERCEPTORS, useClass:Authheader,multi:true}];