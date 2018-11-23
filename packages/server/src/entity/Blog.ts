import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { User } from "./User";

/*
Title
Picture url
Programming languages
Notes
*/

@Entity()
export class Blog extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "text" })
  pictureUrl: string;

  @Column({ type: "text", array: true })
  techTags: string[];

  @Column()
  author: string;

  @ManyToOne(() => User, user => user.blogs)
  @JoinColumn({ name: "author" })
  user: Promise<User>;
}
