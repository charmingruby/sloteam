interface IFeedbackMessages {
  added: () => string
  removed: () => string
  updated: () => string
  referenced: () => string
  unreferenced: () => string
}

export class FeedbackMessages implements IFeedbackMessages {
  constructor(
    private module: string,
    private reference?: string
  ) {}

  added () {
    return `Your ${this.module} details have been saved.`;
  }

  updated () {
    return `Your ${this.module} details have been updated.`;
  }

  removed () {
    return `Your ${this.module} details have been removed.`;
  }

  referenced () {
    return `Your ${this.module} have been added to a new ${this.reference}.`;
  }

  unreferenced () {
    return `Your ${this.module} no longer belongs to this ${this.reference}.`;
  }
}
