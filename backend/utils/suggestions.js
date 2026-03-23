function getSuggestions(type, action) {
  if (type === "transport" && action === "car") {
    return {
      suggestion: "Use metro or cycling instead of car",
      reason: "Cars emit ~2.5 kg CO₂ per trip, while metro emits ~0.5 kg"
    };
  }

  if (type === "food" && action === "nonveg") {
    return {
      suggestion: "Try vegetarian meals more often",
      reason: "Non-veg meals have significantly higher carbon emissions"
    };
  }

  return {
    suggestion: "Great choice! Keep it up 🌱",
    reason: "This action has low or zero carbon impact"
  };
}

module.exports = getSuggestions;