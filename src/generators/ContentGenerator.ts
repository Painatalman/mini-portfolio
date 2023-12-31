import ContentData from '~/types/ContentData';
import ContentOptions from '~/types/ContentOptions';
import getUniqueRandomValues from '~/utils/getUniqueRandomValues';

class ContentGenerator {
  content: ContentData<string>[];
  constructor(content: ContentData<string>[]) {
    this.content = content;
  }

  async getRandom({ type, quantity = 1 }: ContentOptions): Promise<string[]> {
    const typeData = this.content.find(
      (contentItem) => contentItem.type === type
    );

    if (!typeData) throw new Error(`Unknown type: ${type}`);

    return getUniqueRandomValues(typeData.content, quantity);
  }
}

export default ContentGenerator;
