import { createRealmContext } from '@realm/react'

import { Coords } from './schemas/Coords'

import { SyncConfiguration } from 'realm'
import { Historic } from './schemas/Historic'

const realmAccessBehavior: Realm.OpenRealmBehaviorConfiguration = {
  type: Realm.OpenRealmBehaviorType.OpenImmediately,
}

export const syncConfig: Partial<SyncConfiguration> = {
  flexible: true,
  newRealmFileBehavior: realmAccessBehavior,
  existingRealmFileBehavior: realmAccessBehavior,
}

export const { RealmProvider, useRealm, useQuery, useObject } =
  createRealmContext({
    schema: [Historic, Coords],
    schemaVersion: 1,
  })
