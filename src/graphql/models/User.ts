import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}

// This object will generate this graphQL type:
// type Author {
//     id: Int!
//     firstName: String
//     lastName: String
//   }
