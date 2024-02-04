import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserSetting } from './UserSetting';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  settings?: UserSetting;
}
