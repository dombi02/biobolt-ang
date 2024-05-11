import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';
import { User } from '../shared/models/User';
import { Message } from '../shared/models/Message';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss']
})
export class MessageViewComponent implements OnInit {
  user?: User;
  messages: Message[] = [];
  topics: Message[] = [];
  top_five: Message[] = [];
  topics_string: string[] = []; 
  topic: string = ''; // Input mezőhöz tartozó változó
  selectedTopic: string = ''; // A kiválasztott téma tárolására

  constructor(private uS: UserService, private mS: MessageService) { }

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    if (userData) {
      this.uS.rea(userData.uid).subscribe(d => {
        this.user = d;
        this.loadTopics();
      });
    }
  }
  
  loadTopics(): void {
    this.mS.rea_all().subscribe(t => {
      this.topics = t;
      this.topics.forEach(topic => {
        if (!this.topics_string.includes(topic.topic)) {
          this.topics_string.push(topic.topic);
        }
      });
    });
  
    this.mS.rea_last_five().subscribe(five => {
      this.top_five = five;
    });
  }
  
  
  searchByTopic(): void {
    if (this.selectedTopic.trim() !== '') { // Módosítás: A selectedTopic-ot használjuk
      this.mS.rea_by_topic("topic", this.selectedTopic.trim()).subscribe(messages => {
        this.messages = messages;
      });
    }
  }
}
