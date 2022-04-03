function Logger(logString: string) {
  // console.log("Logger ファクトリ");
  return function (constructor: Function) {
    // console.log(logString);
    // console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  // console.log("WithTemplate ファクトリ");
  return function (constructor: any) {
    // console.log("テンプレートを出力中…");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    // console.log(p);
    if (hookEl) {
      // hookEl.textContent = template;
      // console.log(hookEl)
      // console.log(hookEl.textContent)
      // console.log(hookEl.innerHTML)
      hookEl.innerHTML = template;
      // hookEl.querySelector('h1')!.textContent = p.name
      hookEl.querySelector("h1")!.innerHTML = p.name;
    }
  };
}

@Logger("ログ出力中…")
@WithTemplate("<h1>Personオブジェクト</h1>", "app")
class Deco {
  name = "Max";
  constructor() {
    // console.log("mimi");
  }
}

// ----------------------------------------

function Log(target:any,propertyName:string|symbol){
  console.log("Property デコレータ")
  console.log(target)
  console.log(propertyName)
}


class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }else{
      throw new Error('不正な価格です。０以下は設定できません。')
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
