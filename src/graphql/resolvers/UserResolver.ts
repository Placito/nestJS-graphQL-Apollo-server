import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { User } from '../models/User';
import { mockUsers } from 'src/__mocks__/mockUsers';
import { UserSetting } from '../models/UserSetting';
import { mockUserSettings } from 'src/__mocks__/mockUserSettings';

@Resolver((of: User) => User) // This tells that 'User' is the parent
export class UserResolver {
  @Query((returns) => User, { nullable: true }) // in case the id don't exist, then you'll be returned NULL
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id === id);
  }

  @Query(() => [User])
  getAllUsers() {
    return mockUsers;
  }

  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true }) // A field resolver is a function that provides the value for a specific field in a GraphQL type. We set the name to 'settings' so getUserSettings doesn't appear in the schema.gpl
  getUserSettings(@Parent() user: User) {
    return mockUserSettings.find((setting) => setting.userId === user.id);
  }
}
