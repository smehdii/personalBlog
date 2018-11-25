import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { User } from "./User";

/*
id: ID!
  numDays: Int
  codeUrl: String!
  techTags: [String!]!
  notes: String!
*/

@Entity()
export default class CodeReviewRequest extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ type: "int" })
  numDays: number;

  @Column({ type: "text" })
  codeUrl: string;

  @Column({ type: "text", array: true })
  techTags: string[];

  @Column()
  notes: string;

  @Column()
  owner: string;

  @ManyToOne(() => User, user => user.codeReviewRequests)
  @JoinColumn({ name: "owner" })
  user: Promise<User>;
}
