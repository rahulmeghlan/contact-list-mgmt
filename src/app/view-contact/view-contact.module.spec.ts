import { ViewContactModule } from './view-contact.module';

describe('ViewContactModule', () => {
  let viewContactModule: ViewContactModule;

  beforeEach(() => {
    viewContactModule = new ViewContactModule();
  });

  it('should create an instance', () => {
    expect(viewContactModule).toBeTruthy();
  });
});
