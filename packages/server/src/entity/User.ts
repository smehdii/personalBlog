import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany
} from "typeorm";
import { Blog } from "./Blog";
import CodeReviewRequest from "./CodeReviewRequest";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ type: "text", unique: true })
  username: string;

  @Column({ type: "text", unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Blog, blog => blog.author)
  blogs: Blog[];

  @OneToMany(
    () => CodeReviewRequest,
    codeReviewRequest => codeReviewRequest.owner
  )
  codeReviewRequests: CodeReviewRequest[];
}
