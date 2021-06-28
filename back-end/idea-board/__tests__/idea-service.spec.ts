import {Concept, Idea, IdeaService, IdeaTypeEnum, ToDo} from '../idea-service'
import { NotificationService } from '../notification-service'

const notificationServiceMock = { notify: jest.fn() }

describe('idea-service', () => {
    afterEach(() => {
        notificationServiceMock.notify.mockReset()
    })
    
    test('is defined', () => {
        expect(IdeaService).toBeDefined()
    })

    describe('it works as expected for ToDo', () => {
        let ideaService: IdeaService
        let createdTodo: ToDo
        beforeAll(() => {
            ideaService = new IdeaService(notificationServiceMock)
        })

        test('creates new ToDo', () => {
            const todo: ToDo = {
                type: IdeaTypeEnum.ToDo,
                title: 'todo title val',
                description: 'todo description val',
                done: false
            }
            createdTodo = ideaService.create(todo)
            expect(createdTodo).toMatchInlineSnapshot({ id: 0 }, `
Object {
  "description": "todo description val",
  "done": false,
  "id": 0,
  "title": "todo title val",
  "type": "ToDo",
}
`)
        })

        it('updates ToDo', async () =>  {  
            const upsertTitle = {
                id: createdTodo.id!,
                title: 'new title value'
            }
            await expect(ideaService.update(upsertTitle))
            .resolves
            .not.toThrow();

            expect(notificationServiceMock.notify).toHaveBeenCalledTimes(1)
        });

        describe('getAllByType', () => {
            it('should find one ToDo idea', () => {
                const oneToDoIdea = ideaService.getAllByType(IdeaTypeEnum.ToDo)
                expect(oneToDoIdea).toMatchInlineSnapshot(`
Array [
  Object {
    "description": "todo description val",
    "done": false,
    "id": 0,
    "title": "new title value",
    "type": "ToDo",
  },
]
`)
            })
            it('should not find any Concept idea', () => {
                const noConceptIdea = ideaService.getAllByType(IdeaTypeEnum.Concept)
                expect(noConceptIdea).toHaveLength(0)
            })
        })
    })

    describe('it works as expected for Concept', () => {
        let ideaService: IdeaService
        let createdConcept: Concept
        beforeAll(() => {
            ideaService = new IdeaService(notificationServiceMock)
        })

        test('creates new Concept', () => {
            const todo: Concept = {
                type: IdeaTypeEnum.Concept,
                title: 'concept description val',
                description: 'concept description val',
                references: ['http://localhost']
            }

            createdConcept = ideaService.create(todo)
            expect(createdConcept).toMatchInlineSnapshot({ id: 0 }, `
Object {
  "description": "concept description val",
  "id": 0,
  "references": Array [
    "http://localhost",
  ],
  "title": "concept description val",
  "type": "Concept",
}
`)
        })

        it('updates concept', async () =>  {  
            const upsertTitle = {
                id: createdConcept.id!,
                title: 'new title value concept'
            }
            await expect(ideaService.update(upsertTitle))
            .resolves
            .not.toThrow();

            expect(notificationServiceMock.notify).toHaveBeenCalledTimes(1)
        });

        describe('getAllByType', () => {
            it('should find no ToDo idea', () => {
                const oneToDoIdea = ideaService.getAllByType(IdeaTypeEnum.ToDo)
                expect(oneToDoIdea).toHaveLength(0)
            })
            it('should not find any Concept idea', () => {
                const noConceptIdea = ideaService.getAllByType(IdeaTypeEnum.Concept)
                expect(noConceptIdea).toMatchInlineSnapshot(`
Array [
  Object {
    "description": "concept description val",
    "id": 0,
    "references": Array [
      "http://localhost",
    ],
    "title": "new title value concept",
    "type": "Concept",
  },
]
`)
            })
        })
    })

    test('throws if idea do not exits' , async () => {
        const ideaService = new IdeaService(notificationServiceMock)
        expect(ideaService.update({id: -1})).rejects.toThrow('Idea with id: -1 not found')
    })
})