import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SignInModel} from './log-in.model';

@Injectable()
export class LogInService {
    private url = '/api/login';

    constructor(private http: HttpClient) {
    }

    login(signInModel: SignInModel) {
        return this.http.post(this.url, signInModel);
    }
}
