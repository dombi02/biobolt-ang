import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { User } from "../shared/models/User";

@Injectable({
    providedIn:'root'
})
export class UserService {

    coll_name = "Felhasznalok";

    constructor(private ng_fire: AngularFirestore) {}

    cre(user: User) {
        return this.ng_fire.collection<User>(this.coll_name).doc(user.id).set(user);
    }

    rea(id: string) {
        return this.ng_fire.collection<User>(this.coll_name).doc(id).valueChanges();
    }

    rea_all(){
        return this.ng_fire.collection<User>(this.coll_name).valueChanges()
    }

    upd(user: User) {
        return this.ng_fire.collection<User>(this.coll_name).doc(user.id).set(user);
    }

    del(id: string) {
        return this.ng_fire.collection<User>(this.coll_name).doc(id).delete();
    }

}