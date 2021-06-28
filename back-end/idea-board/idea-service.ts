import { NotificationService } from "./notification-service";

/* 
  Task 1. Define types for:
      - `BasicIdea`: Base type, contains `description` and `title` fields.
      - `ToDo`: Similar to `BasicIdea`, contains also `done` field.
      - `Concept`: Similar to `ToDo`, contains optional `done` and `references` fields, `references` is an array of URLs (strings).

  Use these types in other tasks, don't forget about `repository`. Please think of a way how we can easily distinguish idea types.
*/

type URL = string
export enum IdeaTypeEnum {
  ToDo = 'ToDo',
  Concept = 'Concept'
}

type BasicIdea = {
  id?: number
  title: string
  description: string
}
export type ToDo = BasicIdea & {
  type: IdeaTypeEnum.ToDo
  done: boolean
}
export type Concept = BasicIdea & {
  type: IdeaTypeEnum.Concept
  done?: boolean
  references: URL[]
}

export type Idea = ToDo | Concept

type IdeaUpdateParam = Partial<Omit<Idea, 'id'>> & {
  id: number
}

export class IdeaService {
  private readonly repository: any[] = []; // This should hold all types of ideas.

  constructor(private readonly notificationService: NotificationService) {}

  /*
    Task 2. Implement `create` method, it should accept all idea types and return the corresponding, concrete type. Use `repository` to store the input.
  */
  create<T extends Idea>(idea: T): T {
    const toSave = {
      ...idea,
      id: this.repository.length
    }
    this.repository.push(toSave)
    return {
      ...toSave
    }
  }

  /* 
    Task 3. Implement `update` method, it should accept update for all idea types. Bonus points if it accepts partial update.
    
    Additionally, we must ensure that if `title` in `BasicIdea`, `done` in `ToDo` or `references` in `Concept` are changed we call the Notification service.
    
    Please bear in mind that in the future we may need to notify about other fields update as well.
    We need to ensure that we won't forget about any new fields added in the future.
    
    Use `repository` to store the update and `notificationService` to notify about the update.
  */
  async update<T extends IdeaUpdateParam>(update: T): Promise<void> {
    const currentIdea = this.repository[update.id]
    if(!currentIdea)
      throw new Error(`Idea with id: ${update.id} not found`)
    
    const noChanges = Object.entries(update).every(([key, value]) => {
      return currentIdea[key] === value
    })

    if(noChanges){
      return Promise.resolve()
    }

    this.repository[update.id] = {
      ...this.repository[update.id],
      ...update
    }
    
    await this.notificationService.notify(this.repository[update.id])
  }

  /*
    Task 4. Implement `getAllByType` method, it accepts idea type and returns an array of the corresponding, concrete types.
    
    Use `repository` to fetch ideas.
  */
  getAllByType(type: IdeaTypeEnum): Idea[] {
    return this.repository.filter((idea: Idea) => idea.type === type)
  }
}

/*
  Task 5. Write unit tests for `IdeaService` class. For simplicity don't bother with `repository`.
*/
