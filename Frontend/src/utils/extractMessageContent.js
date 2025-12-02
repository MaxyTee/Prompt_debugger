export const extractMessageContent = (messageObj) => {
  if (!messageObj || typeof messageObj.message_content !== "object") {
    return "";
  }

  const content = messageObj.message_content;

  let result = "";

  if (content.original_prompt) {
    result += `Original Prompt: ${content.original_prompt}\n\n`;
  }

  if (
    content.suggestions &&
    Array.isArray(content.suggestions) &&
    content.suggestions.length > 0
  ) {
    result += "Suggestions:\n";
    content.suggestions.forEach((suggestion, index) => {
      result += `${index + 1}. ${suggestion}\n`;
    });
    result += "\n";
  }

  if (content.explanation) {
    result += `Explanation: ${content.explanation}`;
  }
  return result.trim();
};
