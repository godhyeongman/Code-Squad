class ClassifierAlpha {
  number = 0;

  constructor(number) {
    this.number = number;
    this.pod = { num: 1 };
    this.factorSet = new Set();
  }

  isFactor(potentialFactor) {
    return this.number % potentialFactor == 0;
  }

  factors() {
    const loop = Math.sqrt(this.number);

    if (this.isFactor(this.pod.num)) {
      this.factorSet.add(this.pod.num); // 문제 결국 현재 객체 내프로퍼티는 동결이지만 결국 count와 팟은 동결이 아니지 않나? 이러면 처음 고민과 똑같다
      this.factorSet.add(this.number / this.pod.num); //추가 머핀의 의견 다름함수에서 this.pod을 건들수 있으므로 이것도 순수하지는 않지 않나? 맞는말 인것 같다
    }

    this.pod.num++;
    if (this.pod.num <= loop) this.factors();
    return this.factorSet;
  }

  isPerfect() {
    return ClassifierAlpha.sum(this.factors()) - this.number == this.number;
  }

  isAbundant() {
    return ClassifierAlpha.sum(this.factors()) - this.number > this.number;
  }

  isDeficient() {
    return ClassifierAlpha.sum(this.factors()) - this.number < this.number;
  }

  static sum(factors) {
    // static은 참조를 해도 값이 바뀌지않나? 왜냐하면 Classification이라는 공간에서 벗어나니깐?
    const sumFactors = [...factors].reduce((acc, curr) => acc + curr);
    return sumFactors;
  }
}

// class ClassifierAlpha {
//   number = 0;

//   constructor(number) {
//     this.number = number;

//   }

//   isFactor(potentialFactor) {
//     return this.number % potentialFactor == 0;
//   }

//   factors() {
//     var factorSet = new Set();
//     for (var pod = 1; pod <= Math.sqrt(this.number); pod++) {
//       if (this.isFactor(pod)) {
//         factorSet.add(pod);
//         factorSet.add(this.number / pod);
//       }
//     }
//     return factorSet;
//   }

//   isPerfect() {
//     return ClassifierAlpha.sum(this.factors()) - this.number == this.number;
//   }

//   isAbundant() {
//     return ClassifierAlpha.sum(this.factors()) - this.number > this.number;
//   }

//   isDeficient() {
//     return ClassifierAlpha.sum(this.factors()) - this.number < this.number;
//   }

//   static sum(factors) {
//     var total = 0;
//     factors.forEach((factor) => {
//       total += factor;
//     });
//     return total;
//   }
// }

// var alpha1 = new ClassifierAlpha(10);
const alpha2 = Object.freeze(new ClassifierAlpha(6));

console.log(alpha2.factors());
console.log(ClassifierAlpha.sum(alpha2.factorSet));
console.log(alpha2.isPerfect());
// console.log(alpha1.isPerfect());
// console.log(alpha2.isPerfect());
