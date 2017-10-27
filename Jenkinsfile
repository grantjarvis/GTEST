#!groovy

/*
def gitGroup = 'acnapi'
def gitRepo = 'devops-common-pipelines'
def gitPath = 'ssh://git@gitlab.prototype.apidevops.io:22/' + gitGroup + '/' + gitRepo
def jenkinsPipeline = 'test' // ".groovy" extension will be added automatically
jenkinsCredentialsId = COMMON_REPO_CREDNTIAL_ID
*/

def gitPath = 'ssh://' + COMMON_REPO_BASE_PATH + ':22/' + COMMON_REPO_GROUP + '/' + COMMON_REPO
def gitBranch = 'master'

jenkinsNode = 'nodejs'
if (LANGUAGE == 'nodejs') {
  jenkinsNode = 'nodejs' // Specifies a node to be used for checkout, default value: empty string (runs on any node)
} else if (LANGUAGE == 'java') {
  jenkinsNode = 'java'
}

def pipeline

stage('load pipeline'){ 
    echo "COMMON_REPO_BASE_PATH: $COMMON_REPO_BASE_PATH, COMMON_REPO_GROUP: $COMMON_REPO_GROUP, COMMON_REPO: $COMMON_REPO, LANGUAGE: $LANGUAGE, gitPath: $gitPath, JENKINS_PIPELINE: $JENKINS_PIPELINE"

    pipeline = fileLoader.fromGit(
        JENKINS_PIPELINE,
        gitPath,
        gitBranch,
        COMMON_REPO_CREDNTIAL_ID,
        jenkinsNode
    )
}
pipeline.runJenkinsfile()