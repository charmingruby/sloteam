enum FeedbackTypes {
  Sucess,
  Error,
}

interface FeedbackMessagesProps {
  module: string
  type: FeedbackTypes
}

export class FeedbackMessages {
  constructor() {}
}
