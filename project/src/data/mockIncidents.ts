import { Incident } from '../types/incident';

export const mockIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in job recommendations, leading to unequal opportunity distribution. Initial analysis shows a 23% bias towards specific groups. Remediation involves retraining with balanced datasets and implementing fairness constraints.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information for industrial equipment, which could have led to physical harm. The model confidently described non-existent emergency protocols that would have endangered users. Immediate containment measures have been implemented.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata when prompted with specific adversarial inputs. The leak included public profile information but no private data. Vulnerability has been patched in the latest update.",
    severity: "Low",
    reported_at: "2025-02-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Unauthorized Access to Training Data",
    description: "AI system allowed unauthorized access to segments of its training data through a prompt injection attack. Investigation shows no PII was exposed, but some proprietary information was potentially compromised. Security team has implemented additional safeguards.",
    severity: "Medium",
    reported_at: "2025-03-28T16:45:00Z"
  },
  {
    id: 5,
    title: "Autonomous System Override Failure",
    description: "Critical safety override in autonomous system failed to engage during unexpected operating conditions. System continued operation outside safe parameters for 37 seconds before manual shutdown. No injuries reported, but equipment damage estimated at $50,000.",
    severity: "High",
    reported_at: "2025-04-05T11:20:00Z"
  }
];