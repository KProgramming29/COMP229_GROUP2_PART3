export class Survey {
  constructor(
    public dateStart?: Date,
    public dateEnd?: Date,
    public _id?: string,
    public title?: string,
    public type?: string,
    public author?: string,
    public user?: string,
    public questionsBloc?: {
      question?: string,
      options?: string[]
    }[],
    public answerBloc?: {
      answer?: number[];
    }[],
    public isActive?: boolean
  ) {}
}

// Example
// _id: 00001
// title: "Canadian winter electicity consomption habits"
// author: "BBDO Agency"
// dateStart:  new Date()
// dateEnd:  new Date()
// questionBloc: [
// {
//     question: "What temperature do you... ?",
//     options: ["under 20", "between 20 and 23", "over 23"],
// },
// {
//     question: "What appliances do you... ?"
//     options: ["Fridge", "Oven", "Washing Machine", "Air Frier"],
// }]
// answerBloc = [
// {
//   answer: [1, 4, 0]         (stands for 1 person respond option 1, 4 persons respond answer 2 and 0 chose 3)
// },
// {
//   answer: [0, 0, 2, 3]
// }]
