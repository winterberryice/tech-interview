import { Idea } from '@ccal-apps/core';

export class CreateIdea {
  static readonly type = '[Idea] Add idea';
  constructor(public idea: Idea) {}
}

export class RemoveIdea {
  static readonly type = '[Idea] Remove idea';
  constructor(public ideaId: string) {}
}

export class UpdateIdea {
  static readonly type = '[Idea] Update idea';
  constructor(public idea: Idea) {}
}
