// src/user/services/user.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from '../repository/user.repository';

describe('UserService', () => {
  let service: UserService;
  let repository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: UserRepository,
          useValue: {
            create: jest.fn().mockImplementation((dto) => Promise.resolve({
              ...dto, 
              id: 1, // Mock an id or other properties as needed
              email: 'user',
              password: 'password',
              // Add any other fields or mock methods required by your User model
            })),
            // Mock other methods as needed
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('should create a user', async () => {
    const userDto = { email: 'test@example.com', password: 'password123' };
    const createdUser = await service.create(userDto);

    expect(createdUser).toHaveProperty('id', 1);
    expect(createdUser.email).toEqual(userDto.email);
    // Add more assertions as needed
  });

  // Add more tests here
});
