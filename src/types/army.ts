import { TTurnWhen } from './meta'

export interface IArtifacts {
  [artifact: string]: {
    desc: string
    when: TTurnWhen[]
  }
}

export interface ICommandTraits {
  [trait: string]: {
    [unit: string]: {
      desc: string
      when: TTurnWhen[]
    }
  }
}

export interface IArmy {
  heroes: {
    name: string
    wounds: string
    desc: string
    points: string
    tags?: string[]
  }[]
  units: {
    name: string
    wounds: string
    models: string
    desc: string
    points: string
    tags?: string[]
  }[]
  monsters: {
    name: string
    wounds: string
    desc: string
    points: string
    tags?: string[]
  }[]
  formations: {
    name: string
    desc: string
    points: string
  }[]
}
