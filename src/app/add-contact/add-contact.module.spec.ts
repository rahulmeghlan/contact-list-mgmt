import { AddContactModule } from './add-contact.module';

describe('AddContactModule', () => {
  let addContactModule: AddContactModule;

  beforeEach(() => {
    addContactModule = new AddContactModule();
  });

  it('should create an instance', () => {
    expect(addContactModule).toBeTruthy();
  });
});
