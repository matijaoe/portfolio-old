import { projects } from '~~/data/projects'

export const useProject = ({ slug }: { slug: string }) => {
  const findProject = (slug: string) => {
    return projects.find(({ name }) => slugify(name) === slug)
  }

  const project = computed(() => findProject(slug))

  return {
    project,
  }
}
