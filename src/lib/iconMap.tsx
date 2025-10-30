import {
    Code,
    Server,
    Cloud,
    Layers
} from 'lucide-react';

// Import your custom SVG components
import {
    NextIcon,
    ReactIcon,
    TypeScriptIcon,
    TailwindIcon,
    NodeIcon,
    PythonIcon,
    DockerIcon,
    GitIcon,
    AWSIcon
} from '@/app/components/icons';

export const categoryIconMap = {
    code: Code,
    server: Server,
    cloud: Cloud,
    layers: Layers,
};

export const skillIconMap = {
    nextjs: NextIcon,
    react: ReactIcon,
    typescript: TypeScriptIcon,
    tailwind: TailwindIcon,
    nodejs: NodeIcon,
    python: PythonIcon,
    docker: DockerIcon,
    git: GitIcon,
    aws: AWSIcon,
    code: Code,
    server: Server,
    layers: Layers,
};

export type CategoryIconKey = keyof typeof categoryIconMap;
export type SkillIconKey = keyof typeof skillIconMap;