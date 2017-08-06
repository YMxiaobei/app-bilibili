import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent-my-comment',
  templateUrl: './sent-my-comment.component.html',
  styleUrls: ['./sent-my-comment.component.scss']
})
export class SentMyCommentComponent implements OnInit {
  expressions: string[] = [ "(⌒▽⌒)", "（￣▽￣）", "(=・ω・=)", "(｀・ω・´)", "(〜￣△￣)〜", "(･∀･)", "(°∀°)ﾉ", "(￣3￣)", "╮(￣▽￣)╭", "( ´_ゝ｀)",
  "←_←", "→_→", "(<_<)", "(>_>)", "(;¬_¬)", "(\"▔□▔)/", "(ﾟДﾟ≡ﾟдﾟ)!?", "Σ(ﾟдﾟ;)", "Σ( ￣□￣||)", "(´；ω；`)", "（/TДT)/", "(^・ω・^ )", "(｡･ω･｡)",
  "(●￣(ｴ)￣●)", "ε=ε=(ノ≧∇≦)ノ", "(´･_･`)", "(-_-#)", "（￣へ￣）", "(￣ε(#￣) Σ", "ヽ(`Д´)ﾉ", "(╯°口°)╯(┴—┴", "（#-_-)┯━┯", "_(:3」∠)_",
  "(笑)", "(汗)", "(泣)", "(苦笑)"
  ]	

  constructor() { }

  ngOnInit() {
  }

}
