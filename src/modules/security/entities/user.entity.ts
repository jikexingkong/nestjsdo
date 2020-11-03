import { time } from '@/core';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { AccessToken } from './access-token.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({
        comment: '姓名',
        nullable: true,
    })
    nickname?: string;

    @Column({ comment: '用户名', unique: true })
    username!: string;

    @Column({ comment: '密码', length: 500, select: false })
    password!: string;

    @Column({ comment: '手机号', nullable: true, unique: true })
    phone?: string;

    @Column({ comment: '邮箱', nullable: true, unique: true })
    email?: string;

    @Column({ comment: '手机绑定', default: false })
    phoneBound?: boolean;

    @Column({ comment: '邮箱绑定', default: false })
    emailBound?: boolean;

    @Column({ comment: '用户状态,是否激活', default: true })
    actived?: boolean;

    @CreateDateColumn({
        comment: '用户创建时间',
        transformer: {
            from: (date) => time({ date }).format('YYYY-MM-DD HH:mm:ss'),
            to: (date) => date,
        },
    })
    created_at!: Date;

    /**
     * 用户的登录令牌
     *
     * @type {AccessToken[]}
     * @memberof User
     */
    @OneToMany(() => AccessToken, (accessToken) => accessToken.user, {
        cascade: true,
    })
    accessTokens!: AccessToken[];
}
