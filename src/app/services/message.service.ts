import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable, map } from "rxjs";
import { Message } from "../shared/models/Message";

@Injectable({
    providedIn:'root'
})
export class MessageService {

    coll_name = "Uzenetek";

    constructor(private ng_fire: AngularFirestore) {}

    rea_by_topic(fieldName: string, value: any): Observable<Message[]> {
        return this.ng_fire.collection<Message>(this.coll_name, ref => ref.where(fieldName, '==', value)).valueChanges();
    }

    rea_all(): Observable<Message[]> {
        return this.ng_fire.collection<Message>(this.coll_name).valueChanges();
    }

    rea_last_five(): Observable<Message[]> {
        return this.ng_fire.collection<Message>(
            this.coll_name,
            ref => ref.orderBy('time', 'desc').limit(5)
        ).snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Message;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }
    
    

}
