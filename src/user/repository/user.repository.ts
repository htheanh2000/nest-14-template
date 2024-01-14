// src/user/repository/user.repository.ts

import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Add methods for database operations
  // Example: Find user by email, create a user, etc.
}
